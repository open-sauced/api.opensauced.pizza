import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../user/user.entity";
import {Repo} from "./repo.entity";

@Entity({
  name: 'users_to_repos_votes',
  orderBy: {
    created_at: 'DESC',
  }
})
export class RepoToUserVotes {
  @PrimaryGeneratedColumn()
  public id!: number

  @Column()
  public user_id!: number

  @Column()
  public repo_id!: number

  @ManyToOne(() => User, (user) => user.repoToUserVotes)
  @JoinColumn({
    name: 'id',
    referencedColumnName: 'id',
  })
  public user!: User

  @ManyToOne(() => Repo, (repo) => repo.repoToUserVotes)
  @JoinColumn({
    name: 'id',
    referencedColumnName: 'id',
  })
  public repo!: Repo
}
