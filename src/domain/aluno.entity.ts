import { Injectable } from "@nestjs/common";
import { PersonalE } from "./entitys";
import User from "./User.entity";

@Injectable()
export default class Aluno extends User  {
    public personal:PersonalE
    constructor(args:User){
        super(args)
    }
}