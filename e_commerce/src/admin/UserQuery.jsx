import Left from "./Left";

function UserQuery() {
    return ( 
        <>
            <div className="w-11/12 h-screen flex justify-center mx-auto mt-4">
                <Left/>
                <div className="w-3/5">
                <h1 className="text-3xl font-bold mb-5">User Query Management</h1>
                </div>
            </div>
        </>
     );
}

export default UserQuery;