import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("articulation_movement_muscle", { schema: "gymapp2" })
export class ArticulationMovementPortion {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column({type:'int', name:"articulation_id"})
  articulation_id:number

  @Column({type:'int', name:"movement_id"})
  movement_id:number

  @Column({type:'int', name:"muscle_portion_id"})
  muscle_portion_id:number

  @Column({type:"enum", enum: ['agonist','synergist','antagonist']})
  role: string
}