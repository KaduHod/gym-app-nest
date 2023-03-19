import { Table } from "./entity.decorator";
import { AlunoE, PersonalE } from "./entitys";
import User from "./User.entity";

@Table("users")
export default 
class Personal extends User implements PersonalE 
{
    public alunos:AlunoE[]
    
    constructor(args:PersonalE){
        super(args)
    }
}