import {
  Entity,
  Column,
  BaseEntity,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn, OneToMany
} from "typeorm";

import {User} from "../user/user.entity";
import {Contribution} from "../contribution/contribution.entity";

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

  @Column({
    type: "bigint",
    select: false
  })
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

  @CreateDateColumn({
    type: "timestamp without time zone",
    default: () => "now()",
  })
  created_at: Date;

  @UpdateDateColumn({
    type: "timestamp without time zone",
    default: () => "now()",
  })
  updated_at: Date;

  @Column({
    type: "timestamp without time zone",
    default: () => "now()",
  })
  pushed_at: Date;

  @Column({
    type: "timestamp without time zone",
    default: () => "to_timestamp(0)",
  })
  last_fetched_contributors_at: Date;

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

  @ManyToOne((type) => User, (user) => user.repos)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  user: User

  @OneToMany((type) => Contribution, (contribution) => contribution.repo)
  @JoinColumn({
    name: 'contributions',
    referencedColumnName: 'repo_id',
  })
  contributions: Contribution[]
}
