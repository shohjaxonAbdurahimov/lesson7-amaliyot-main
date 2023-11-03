import { Link, useRouteError } from "react-router-dom"

function ErrorPage() {
    const error = useRouteError()

    if(error.status === 404) {
        return (
            <div className="flex justify-center items-center flex-col mt-[15%]">
                <h1 className=" text-9xl ">404</h1>
                <h1 className="text-3xl mt-10 italic">not Found</h1>
                <Link to="/" className="btn bg-black text-white mt-5"> GO HOME </Link>

            </div>
        )
    }


  return <div>ErrorPage</div>
}

export default ErrorPage