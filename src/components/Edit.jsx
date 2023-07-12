import { useEffect } from "react";
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
    useEffect(() => {

        console.log('wow!!!!!😉',userSelector);
        console.log('!!!!😉😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊',KeycloakSelector);

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
      const handleUpdateUserInfo = async () => {
                      try {
                        const response = await fetch('http://localhost:8080/admin/master/console/#/myrealm/users/3e34d749-951a-405e-8b62-9bf17638b8f0', {
                          method: 'PUT',
                          headers: {
                            'Content-Type': 'http://localhost:8080/auth/admin',
                            Authorization: `Bearer ${KeycloakSelector.token}`,
                          },
                          body: JSON.stringify({
                            username: 'new_username',
                            email: 'new_email@example.com',
                            // Include any other updated user information here
                          }),
                        });
                    
                        if (response.ok) {
                          console.log('User information updated successfully');
                        } else {
                          console.log('Failed to update user information');
                        }
                      } catch (error) {
                        console.log('Error updating user information:', error);
                      }
                    };
                    
                      
                              
    return<>

<div id="id01" class="modal" >
  
  <form class="modal-content animate" style={{width:'50%'}} >
    <div class="imgcontainer">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
    </div>

    <div class="container">
      <label ><b>FirstName</b></label>
      <input type="text" value={userSelector.firstName}  required/>

      <label ><b>LastName</b></label>
      <input type="text" value={userSelector.lastName} required/>

      <label ><b>Mail</b></label>
      <input type="text" value={userSelector.email}  required/>

      <label ><b>Password</b></label>
      <input type="password" value={userSelector.password}  required/>
        

    </div>

    <div class="container" style={{backgroundColor:"#f1f1f1"}}>
      <button type="button" onClick={cancel} class="cancelbtn">Cancel</button>
      <Button size="small" onClick={handleUpdateUserInfo } label="SAVE" />

    </div>
  </form>
</div>


















    	{/* <div id="id01" className="modal">

<form className="modal-content animate" >
        <span onClick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">&times;</span>
    <div style={{ marginLeft: '58%' }} >
    </div>
    <div className="container">
        <form>
        <h1>hhh</h1>
        </form>      </div>

    <div className="container" style={{ backgroundColor: '#f1f1f1' }}>

        <button  onClick={cancel} className="cancelbtn">Cancel</button>
        <span className="psw">Forgot <a href="#">password?</a></span>
    </div>
</form>
</div> */}
    </>
}