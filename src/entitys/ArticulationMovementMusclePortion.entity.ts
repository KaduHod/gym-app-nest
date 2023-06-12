import { Articulation } from "src/modules/articulation/Articulations.entity";
import { Movements } from "src/modules/movements/Movements.entity";
import { MusclePortion } from "src/modules/muscles/MusclePortion.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

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

  @ManyToOne(() => MusclePortion, p => p.articulationMovements)
  @JoinColumn({name: "muscle_portion_id",referencedColumnName:"id"})
  portion: MusclePortion

  @ManyToOne(() => Articulation, a => a.movementsPortions)
  @JoinColumn({name: "articulation_id",referencedColumnName:"id"})
  articulation: Articulation

  @ManyToOne(() => Movements, m => m.articulationPortions)
  @JoinColumn({name: "movement_id",referencedColumnName:"id"})
  movement: MusclePortion
}