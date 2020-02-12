const fs = require('fs')

function convert_image() {
    const body = JSON.parse(fs.readFileSync('image_compressed/125.json'))
    const buf = Buffer.from(body.msg.data, 'base64')
    fs.writeFileSync("125.jpg", buf)
}

function convert_pc() {
    const body = JSON.parse(fs.readFileSync('points_raw/0.json'))
    console.log(body.msg.data.length)
    const buf = Buffer.from(body.msg.data, 'base64')
    console.log(buf, buf.length)
    const dv = new DataView(buf.buffer)

    for(var i = 0; i < body.msg.width; i += body.msg.point_step){
        const x = dv.getFloat32(i*body.msg.point_step+0)
        const y = dv.getFloat32(i*body.msg.point_step+4)
        const z = dv.getFloat32(i*body.msg.point_step+8)
        const intensity = dv.getInt8(i*body.msg.point_step+16)
        const timestamp = dv.getFloat64(i*body.msg.point_step+24)
        console.log(x.toFixed(2),y.toFixed(2),z.toFixed(2),intensity,timestamp)
    }
    //fs.writeFileSync("0.pcd", buf)
}

convert_image()
convert_pc()
