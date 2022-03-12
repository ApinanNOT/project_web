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
function add({ db_host, db_user, db_pass }) {
    return (
        <center>
            <div class="container">
                <div class="col-md-4 col-sm-4 col-md-offset-4">
                    <h1><center>บันทึกข้อมูลผู้เช่า</center></h1>
                    <form>
                        <div class="mb-3">
                            <label for="numberroom" class="form-label">หมายเลขห้อง</label>
                            <input type="text" class="form-control" id="numberroom" aria-describedby="numberroom" />
                        </div>
                        <div class="mb-3">
                            <label for="name" class="form-label">ชื่อผู้เช่า</label>
                            <input type="text" class="form-control" id="name" aria-describedby="name" />
                        </div>
                        <div class="mb-3">
                            <label for="lastname" class="form-label">นามสกุลผู้เช่า</label>
                            <input type="text" class="form-control" id="lastname" aria-describedby="lastname" />
                        </div>
                        <div class="mb-3">
                            <label for="gender" class="form-label">เพศ</label>
                            <input type="text" class="form-control" id="gender" aria-describedby="gender" />
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">เบอร์โทร</label>
                            <input type="text" class="form-control" id="phone" aria-describedby="phone" />
                        </div>
                        <div class="mb-3">
                            <label for="address" class="form-label">ที่อยู่</label>
                            <input type="text" class="form-control" id="address" aria-describedby="address" />
                        </div>
                        <div class="mb-3">
                            <label for="date_start" class="form-label">วันที่เช่า</label>
                            <input type="text" class="form-control" id="date_start" aria-describedby="date_start" />
                        </div>
                        <center><button type="submit" class="btn btn-primary">บันทึกข้อมูล</button></center>
                    </form>
                </div>
            </div>
        </center>
    )
}

export default add