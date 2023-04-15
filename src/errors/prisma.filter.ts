import { ArgumentsHost, ExceptionFilter,  Catch, HttpStatus, HttpException } from "@nestjs/common";
import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError,  } from "@prisma/client/runtime/library";

@Catch(PrismaClientKnownRequestError, PrismaClientUnknownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter{
    private codes:{[key:string]:Function} = {
        "P2002": (error:PrismaClientKnownRequestError):{[key:string]:any, status:number} => {
            return {
                message: `Registro já existe no banco`, 
                cause: error.meta.cause, 
                constraint: error.meta.target,
                status: HttpStatus.CONFLICT
            }
        },
        "P2003": (error:PrismaClientKnownRequestError):{[key:string]:any, status:number} => {
            return {
                message:`${error.meta.field_name} passado não existe ou outros registros dependem dele!`,
                status:HttpStatus.BAD_REQUEST
            }
        },
        "P2025": (error:PrismaClientKnownRequestError):{[key:string]:any, status:number} => {
            return {
                message: "Registro não existe!",
                cause: error.meta.cause,
                status:HttpStatus.BAD_REQUEST
            }
        },
        "P2020": (error:PrismaClientKnownRequestError):{[key:string]:any, status:number} => {
            return {
                message: `Valor de ${error.meta.field_name} muito grande para coluna!`,
                status:HttpStatus.BAD_REQUEST
            }
        },
        "P2021": (error:PrismaClientKnownRequestError):{[key:string]:any, status:number} => {
            return {
                message: error.meta.cause,
                status: HttpStatus.INTERNAL_SERVER_ERROR
            }
        },
        "P2010": (error:PrismaClientKnownRequestError):{[key:string]:any, status:number} => {
            return {
                message: error.meta.cause,
                status: HttpStatus.INTERNAL_SERVER_ERROR
            }
        }
    }

    catch(exception: PrismaClientKnownRequestError | PrismaClientUnknownRequestError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();

        if(exception instanceof PrismaClientUnknownRequestError) {
            return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                msg:'Erro ao tentar gravar no banco', 
            })
        }
        console.log({exception})
        const {status, ...info} = this.getMessageForCode(exception)
        
        return response.status(status).send(info)
    }

    public getMessageForCode(error:PrismaClientKnownRequestError) {
        const errorInfo = this.codes[error.code]

        if(!errorInfo) {
            throw new HttpException({
                message: `Erro do prisma não mapeado!`, 
                code: error.code
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }

        return errorInfo(error);
    }
}

