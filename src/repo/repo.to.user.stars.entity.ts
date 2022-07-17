import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";
import { Repo } from "./repo.entity";

@Entity({
  name: "users_to_repos_stars",
  orderBy: {
    created_at: "DESC",
  }
})
export class RepoToUserStars {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public user_id!: number;

  @Column()
  public repo_id!: number;

  @ManyToOne(() => User, (user) => user.repoToUserStars)
  @JoinColumn({
    name: "id",
    referencedColumnName: "id",
  })
  public user!: User;

  @ManyToOne(() => Repo, (repo) => repo.repoToUserStars)
  @JoinColumn({
    name: "id",
    referencedColumnName: "id",
  })
  public repo!: Repo;
}
