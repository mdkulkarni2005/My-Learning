// interface User {
//     id: string
//     name: string
//     email: string
//     password: string
//     age: number
// }

// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// function UpdateUser(updatedProps : UpdateProps) {

// }

interface User {
  name: string;
  email: string;
  age: number;
}

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function UpdateUser(updatedProps: UpdatePropsOptional){
    // hit the database to update the user
}

