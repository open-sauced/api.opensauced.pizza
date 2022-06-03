import { Entity, Column, BaseEntity, PrimaryColumn } from "typeorm";

@Entity({ name: 'repos' })
export class Repo extends BaseEntity {
  @PrimaryColumn("bigint")
  id: number;

  @Column("bigint")
  user_id: number;

  @Column("bigint")
  issues: number;

  @Column("bigint")
  stars: number;

  @Column("bigint")
  watchers: number;

  @Column("bigint")
  subscribers: number;

  @Column({ default: false })
  is_fork: boolean;

  @Column("timestamp without time zone")
  created_at: string;

  @Column("timestamp without time zone")
  updated_at: string;

  @Column("timestamp without time zone")
  pushed_at: string;

  @Column("timestamp without time zone")
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
