import { Entity, Column, BaseEntity, PrimaryColumn } from "typeorm";

@Entity({
  name: 'contributions'
})
export class Contribution extends BaseEntity {
  @PrimaryColumn("bigint")
  id: number;

  @Column({
    type: "bigint",
    default: 0,
  })
  count: number;

  @Column({
    type: "timestamp without time zone"
  })
  last_merged_at: string;

  @Column({
    type: "character varying",
    length: 255
  })
  contributor: string;

  @Column({
    type: "character varying",
    length: 255
  })
  url: string;
}
