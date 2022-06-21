import { Entity, Column, BaseEntity, PrimaryColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { Repo } from '../repo/repo.entity';
import { RepoToUserVotes } from '../repo/repo.to.user.votes.entity';
import { RepoToUserStars } from '../repo/repo.to.user.stars.entity';

@Entity({
  name: 'users'
})
export class User extends BaseEntity {
  @PrimaryColumn("bigint")
  id: number;

  @Column({
    type: "bigint",
    default: 0,
  })
  open_issues: number;

  @Column({ default: false })
  has_stars_data: boolean;

  @Column({ default: false })
  is_private: boolean;

  @Column({ default: false })
  is_open_sauced_member: boolean;

  @CreateDateColumn({
    type: "timestamp without time zone",
    default: () => "now()",
  })
  created_at: Date;

  @OneToMany(() => Repo, repo => repo.user)
  repos: Repo[]

  @OneToMany(() => RepoToUserVotes, repoToUserVotes => repoToUserVotes.user)
  repoToUserVotes: RepoToUserVotes[]

  @OneToMany(() => RepoToUserStars, repoToUserStars => repoToUserStars.user)
  repoToUserStars: RepoToUserVotes[]
}
