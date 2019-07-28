import {
  Component,
  OnInit
} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  settings = {
    add: {
      confirmCreate: true
    },
    delete: {
      confirmDelete: true
    },
    edit: {
      confirmSave: true
     },

    columns: {
      id: {
        title: 'ID'
      },
      email: {
        title: 'e-mail'
      },
      username: {
        title: 'username'
      },
      firstName: {
        title: 'First Name'
      },
      lastName: {
        title: 'Last Name'
      }
    }
  };
  users: Array<IUser>;
 usersItemSelected: IUser=undefined;


  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList(){
    this.userService.getUsersList().subscribe(data => {
      this.users= data;
    });
  }
  deleteUser(user){
    let evento= user;
    console.log(user);
    this.userService.deleteUser(user.data.id).subscribe (data => {
      console.log(data);
      evento.confirm.resolve(data);
    });
  }
  setUserItemSelected(user: IUser){
    this.userService.setUserItemSelected(user).subscribe(data=> 
      this.users =data);
      this.getUsersList();

    }
createUserItem(objeto){
  let evento=objeto;
  let user = objeto.newData;
  delete user.id;
  user.password="password";
  console.log(user);
  this.userService.createUserItem(user).subscribe(data=>{
    console.log(data);
    evento.confirm.resolve(data);
  });
}

  rowSelected(row){
    console.log(row.data);
  }


}
