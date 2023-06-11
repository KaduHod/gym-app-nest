import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("articulation_movement", { schema: "gymapp2" })
export class ArticulationMovement {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column({type:'int', name:"articulation_id"})
  articulation_id:number

  @Column({type:'int', name:"movement_id"})
  movement_id:number
}