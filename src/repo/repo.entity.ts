import { Entity, Column, BaseEntity, PrimaryColumn } from "typeorm";

@Entity({
  name: 'repos',
  orderBy: {
    stars: 'DESC',
    name: 'ASC'
  }
})
export class Repo extends BaseEntity {
  @PrimaryColumn("bigint")
  id: number;

  @Column("bigint")
  user_id: number;

  @Column({
    type: "bigint",
    default: 0,
  })
  issues: number;

  @Column({
    type: "bigint",
    default: 0,
  })
  stars: number;

  @Column({
    type: "bigint",
    default: 0,
  })
  watchers: number;

  @Column({
    type: "bigint",
    default: 0,
  })
  subscribers: number;

  @Column({ default: false })
  is_fork: boolean;

  @Column({
    type: "timestamp without time zone",
    default: () => "now()",
  })
  created_at: string;

  @Column({
    type: "timestamp without time zone",
    default: () => "now()",
  })
  updated_at: string;

  @Column({
    type: "timestamp without time zone",
    default: () => "now()",
  })
  pushed_at: string;

  @Column({
    type: "timestamp without time zone",
    default: () => "to_timestamp(0)",
  })
  last_fetched_contributors_at: string;

  @Column({
    type: "character varying",
    length: 255
  })
  name: string;

  @Column({
    type: "character varying",
    length: 255
  })
  full_name: string;

  @Column("text")
  description: string;

  @Column({
    type: "character varying",
    length: 64
  })
  language: string;

  @Column({
    type: "character varying",
    length: 64
  })
  license: string;

  @Column({
    type: "character varying",
    length: 255
  })
  url: string;
}
