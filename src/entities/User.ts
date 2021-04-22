import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  // o construtor é chamado sempre que damos um new Objeto
  // neste caso estamos verificando se o id já vem preenchido
  // se não vier preenchido então colocamos um uuid
  // pois podemos estar trabalhando com algum registro existente
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
