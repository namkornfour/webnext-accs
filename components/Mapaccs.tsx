import React from 'react'

function MapaccsPage() {
  return (
    <div className='container mx-auto w-full mt-6 mb-6'>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.5724360105174!2d100.61660863391401!3d13.792050628360162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d001fc66737%3A0x4c558c39cb3515fb!2sAccounting%20System%20Co.%2CLtd.!5e0!3m2!1sen!2sth!4v1728619979905!5m2!1sen!2sth"
        //width="600"
        //height="450"
        //style="border:0;"
        title="แผนที่ บริษัท แอ็คเค้าท์ติ้ง ซิสเต็ม จำกัด"
        loading="lazy"
        className='w-full h-[400px]'
      ></iframe>
    </div>
  )
}

export default MapaccsPage