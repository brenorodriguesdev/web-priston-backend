import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('character')
export class  Character {
  @PrimaryGeneratedColumn('increment')
  id?: number

  @Column()
  nickname: string

  @Column()
  class: number

  @Column()
  level: number

  @Column()
  minutes: number

  @Column()
  battlePoint: number

  @Column()
  deathPoint: number
}