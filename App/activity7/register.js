function Register() {
    this.fullName = document.getElementById('fullname').value;  
    this.phone = document.getElementById('phone').value;   
    this.age = document.getElementById('age').value; 
    this.introduceMySelf = () => {
        parent = document.getElementById('render');  
        const div = document.createElement('div');
        div.classList.add('appended');
        div.innerHTML = `<h1> The Newly Added Form</h1>
        <h1>Full Name: ${this.fullName}</h1><h1>Age: ${this.age}</h1><h1>PhoneNo.: ${this.phone}</h1>`;
        parent.appendChild(div)
        console.log("sxnuhx");
    }

}
const callBack = () => {
    const newObject = new Register();
    newObject.introduceMySelf()

    console.log("sxnuhx");
}
document.getElementById('submitBtn').addEventListener('click', callBack);   

