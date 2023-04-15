import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm'
import * as crypt from 'bcrypt'

export type userT = {
    id:number
    name:string
    nickname:string
    email:string
    password:string
    cellphone?:number
    createdAt:Date
    updatedAt?:Date
    birthday:Date
}

@Entity({name: "users"})
export default class User {
    @PrimaryColumn()
    public id:number;

    @Column({ length: 55 })
    public name: string

    @Column({ length: 55 })
    public nickname:string

    @Column()
    public email:string

    @Column({ length: 255 })
    public password:string

    @Column('int')
    public cellphone:number

    @Column({ type: 'date', default: () => 'CURRENT_DATE' })
    public createdAt:Date

    @Column({ type: 'date'})
    public updatedAt:Date

    @Column({ type: 'date'})
    public birthday:Date

    // constructor(props:userT) {
        // this.name = props.name
        // this.nickname = props.nickname
        // this.email = props.email
        // this.password = props.password
        // this.cellphone = props.cellphone
        // this.createdAt = props.createdAt
        // this.updatedAt = props.updatedAt
        // this.birthday = props.birthday
        // this.hashPassword(this.password)
    // }

    private hashPassword(pass: string) {
        const salt = crypt.genSaltSync(10);
        this.password = crypt.hashSync(pass, salt) as string;
    }
}