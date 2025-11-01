type Props = {
     FirstName: string;
     LastName: string;
     email?:string;
     birthYear: number;

}
     const UserProfile=(props:Props)=> {
     return (<>
     <p>{props.FirstName}</p>
     <p>{props.LastName}</p>
     <p>{props.email}</p>
     <p>{props.birthYear}</p>
     </>
     )
     }

     export default UserProfile;