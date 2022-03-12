import Image from 'next/image'


export const getStaticProps = async () => {
    console.log(process.env.DB_HOST)
    return {
        props: {
            db_host: process.env.DB_HOST,
            db_user: process.env.DB_USER,
            db_pass: process.env.DB_PASS,
        }
    }
}
function find({ db_host, db_user, db_pass }) {
    return (
        <center>
            <div class="container">
                <div class="col-md-4 col-sm-4 col-md-offset-4">
                    <h1><center>ค้นหาข้อมูลผู้เช่า</center></h1>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label"></label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="หมายเลขห้อง"/>
                        </div>
                        <center><button type="submit" class="btn btn-success">ค้นหา</button></center>
                    </form>
                </div>
            </div>
        </center>
    )
}

export default find