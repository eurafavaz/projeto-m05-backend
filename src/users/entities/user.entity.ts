import { CreateUserDto } from '../dto/create-user.dto';

export interface IUser extends CreateUserDto {
  id: string;
}

// Aqui eu busquei aplicar aos estudos o conceito visto em aula de extender uma classe que eu já tinha criado, que no caso é o de criar/input de dados, no entanto com "User" possuindo essa singularidade de armazenar o ID. Fiz isso ao invés de repetir código.
