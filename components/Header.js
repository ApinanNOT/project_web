import Link from 'next/link'

const Header = () => {
    return (
    <ul>
        <Link href="/">
            <button type="button" class="btn btn-success">หน้าหลัก</button>
        </Link>

        <Link href="/add">
            <button type="button" class="btn btn-warning">บันทึกข้อมูลผู้เช่า</button>
        </Link>

        <Link href="/find">
            <button type="button" class="btn btn-secondary">ค้นหาข้อมูลผู้เช่า</button>
        </Link>
    </ul>
    )
}

    export default Header