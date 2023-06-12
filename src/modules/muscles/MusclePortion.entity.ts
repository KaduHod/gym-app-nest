import { ArticulationMovementPortion } from "src/entitys/ArticulationMovementMusclePortion.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Articulation } from "../articulation/Articulations.entity";
import { MuscleGroup } from "./MuscleGroup.entity";

@Entity("muscle_portion", { schema: "gymapp2" })
export class MusclePortion {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("int", { name: "muscle_group_id" })
  muscleGroupId: number;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => MuscleGroup, (muscleGroup) => muscleGroup.musclePortions, {
    onDelete: "CASCADE",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "muscle_group_id", referencedColumnName: "id" }])
  muscleGroup: MuscleGroup;

  @OneToMany(() => ArticulationMovementPortion, amp => amp.portion)
  articulationMovements: ArticulationMovementPortion[]
  
  static MapMovementsByArticulation(args:ArticulationMovementPortion[]) {
    const articulations:Array<Record<string, any> & Articulation> = args.reduce((acc, curr) => {
      const exists = acc.find( articulation => articulation.id === curr.articulation_id )
      if(!exists) acc.push(curr.articulation); 
      return acc
    }, [] as Articulation[]);

    for (const articulation of articulations) {
      articulation.muscleMovements = args.filter(item => item.articulation.id === articulation.id).map( item => item.movement)
    }
    
    return articulations
  }
}
