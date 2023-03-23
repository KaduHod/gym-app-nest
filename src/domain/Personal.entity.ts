import { Table } from "./entity.decorator";
import User from "./User.entity";

@Table("users")
export default 
class Personal extends User 
{
    public alunos:User[]
    
    constructor(args:User){
        super(args)
    }

}