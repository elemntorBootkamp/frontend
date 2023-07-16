import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router';
import { useSelector } from "react-redux";
import { Button } from '../components/Button';


export const Edit=()=>{
    let userSelector=useSelector((ourStore)=>{
        return ourStore.currentUser;
    });
    let KeycloakSelector=useSelector((ourStore)=>{
      return ourStore.currentToken;
  });
  const Fname=useRef(userSelector.firstName);
  const Lname=useRef(userSelector.lastName);
  const Email=useRef(userSelector.email);
  const Pass=useRef(userSelector.password);

  const [firstN, setfirstN] = useState(userSelector.firstName);
  const [lastN, setlastN] = useState(userSelector.lastName);
  const [mailN, setmailN] = useState(userSelector.email);
  const [passN, setpassN] = useState(userSelector.password);

  const [isEditMode, setisEditMode] = useState(false);

    useEffect(() => {

        console.log('wow!!!!!😉',userSelector);
        console.log('!!!!😉😊😊😊😊😊😊😊😊😊😊😊😊',KeycloakSelector);

debugger
 document.getElementById('id01').style.display = 'block';



console.log(userSelector);
        });
    

	var modal = document.getElementById('id01');

		{
			window.onclick = function (event) {
				if (event.target == modal) {
					modal.style.display = 'none';

				}
			};
		}
        const cancel=()=>{
            debugger
            history.back();
                    }
                    
                    // const handleUpdateUserInfo = async () => {
                    //   debugger
                    //   try {
                    
                    //     await KeycloakSelector.init({ onLoad: 'login-required' });
                    
                    //     if (KeycloakSelector.authenticated) {
                    //       const userId = '3e34d749-951a-405e-8b62-9bf17638b8f0'; // User ID to update
                    //       const user = await KeycloakSelector.loadUserInfo();
                    
          
                    //       user.userName = 'kkk';
                    //       user.email = 'new_email@example.com';                    
                    //       await KeycloakSelector.updateUser(user);
                    
                    //       console.log('User information updated successfully');
                    //     } else {
                    //       console.log('User not authenticated');
                    //     }
                    //   } catch (error) {
                    //     console.log('Error updating user information:', error);
                    //   }
                    // };
                   
                    const handleUpdateUserInfo = async () => {
               
                      try {
                        const response = await fetch(
                          'http://localhost:8080/admin/myrealm/users/3e34d749-951a-405e-8b62-9bf17638b8f0',
                          {method: 'PUT',
                            headers: {
                              'Content-Type': 'application/json',
                              Authorization: `Bearer ${KeycloakSelector.token}`,
                              mode: 'cors', 
                            },
                            body: JSON.stringify({
                              userName: "kkk",
                              email: 'new_email@example.com',
                            }),
                            mode: 'no-cors',
                          }
                        );
                        if (response.ok) {
                          console.log('User information updated successfully');
                        } else {
                          console.log('Failed to update user information');
                        }
                      } catch (error) {
                        console.log('Error updating user information:', error);
                      }
                    };
                const checkMail=()=>{
                  const email = Email.current.value;
                  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                
                  if (email.match(emailRegex)) {
                    setmailN(email)
                  } else {
                    alert("Invalid email");
                  }
                };
                const checkFirstName = () => {
                  const firstName = Fname.current.value;
                  const nameRegex = /^[a-zA-Z\s]*$/;
                
                  if (nameRegex.test(firstName)) {
                    setfirstN(firstName)    } 
                    else {
                    alert("Invalid first name");
                  }
                };
                const checkLastName = () => {
                  const lastName = Lname.current.value;
                  const nameRegex = /^[a-zA-Z\s]*$/;
                
                  if (nameRegex.test(lastName)) {
                    setlastN(lastName)       }
                     else {
                    alert("Invalid last name");
                  }
                };       
             const ToEdit=()=>{
              setisEditMode(!isEditMode);
             }                 
    return<>

<div id="id01" class="modal" >
  
  <form class="modal-content animate" style={{width:'50%'}} >
    <div class="imgcontainer">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
    </div>

    <div class="container">
      <label ><b>FirstName</b></label>
      <input type="text" ref={Fname}   disabled={!isEditMode} onBlur={checkFirstName} placeholder={userSelector.firstName}  required/>

      <label ><b>LastName</b></label>
      <input type="text"  ref={Lname}  onBlur={checkLastName}  disabled={!isEditMode} placeholder={userSelector.lastName} required/>
      <label ><b>Mail</b></label>
      <input type="text" ref={Email}  disabled={!isEditMode} onBlur={checkMail} placeholder={userSelector.email}  required/>

      <label ><b>Password</b></label>
      <input type="password"  ref={Pass} placeholder={userSelector.password}  required/>
      
    </div>

    <div class="container" style={{backgroundColor:"#f1f1f1"}}>
      <button type="button" onClick={cancel} class="cancelbtn">Cancel</button>
      <Button size="small" onClick={handleUpdateUserInfo } label="SAVE" />
      <Button size="small" onClick={ToEdit}  label="Edit" />
    </div>
  </form>
</div>
    </>
}