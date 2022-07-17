import {Entity, Column, BaseEntity, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm";
import {Repo} from "../repo/repo.entity";

@Entity({
  name: 'contributions'
})
export class Contribution extends BaseEntity {
  @PrimaryColumn("bigint")
  id: number;

  @Column({
    type: "bigint",
    select: false
  })
  repo_id: number;

  @Column({
    type: "bigint",
    default: 0,
  })
  count: number;

  @Column({
    type: "timestamp without time zone"
  })
  last_merged_at: Date;

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

  @ManyToOne(() => Repo, (repo) => repo.contributions)
  @JoinColumn({
    name: 'repo_id',
    referencedColumnName: 'id',
  })
  repo: Repo
}
