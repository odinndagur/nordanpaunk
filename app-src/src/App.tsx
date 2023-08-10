import './style.css'
import np_svg from './assets/np_svg.svg'
import year_svg from './assets/year_svg.svg'
import graphic1 from './assets/graphic1.svg'

function Friday() {

  const data = [
    // ['5:00 PM', '-DOORS-',''],
    ['5:30 PM', '', ''],
    ['6:00 PM', 'OSMÉ', ''],
    ['6:30 PM', '', 'SMEGMAGEDDON'],
    ['7:00 PM', 'LÍKAMI', ''],
    ['7:30 PM', '', ''],
    ['8:00 PM', 'DÖDSRIT', ''],
    ['8:30 PM', '', 'TONTO'],
    ['9:00 PM', 'ISKANDR', ''],
    ['9:30 PM', '', 'RONJA'],
    ['10:00 PM', 'HEXHEXHEX', ''],
    ['10:30 PM', '', ''],
    ['11:00 PM', 'IFFERNET', ''],
    ['11:40 PM', '', 'EPIDERMAL VEIL'],
    ['12:10 AM', 'GRÓA', ''],
    ['12:50 AM', '', 'GUÐIR HINS NÝJA TÍMA'],
    ['1:20 AM', 'GJÖLL', ''],
    ['2:00 AM', '', ''],
  ]
  const footer = ['2:?? AM', 'FIRE: SANGRE DE MUERDAGO']
  return (
    <>
    <div style={{maxWidth:'600px',margin:'auto'}}>

    
    {/* <h1 style={{color:'white',textAlign:'center',paddingBottom:0,marginBottom:0,fontSize:'2.5rem'}}>NORÐANPAUNK 2023</h1> */}
 <table className="friday-table" style={{backgroundColor:'rgb(234, 153, 153)'}}>
        <thead style={{border:'none',backgroundColor:'rgb(187,38,26)'}}>
          <tr>
            <th style={{border:'none',textAlign:'center',fontSize:'1.5rem'}} colSpan={3}>FRIDAY</th>
          </tr>
          <tr style={{backgroundColor:'white'}}>
            <th style={{borderRight:'none',borderLeft:'none',position:'relative'}}>      <img style={{position:'absolute',top:0,left:0,transform:'translate(-0%,-50%)'}} src={graphic1} alt="" />
</th>
            <th style={{borderRight:'none',borderLeft:'none'}}>STAGE</th>
            <th style={{borderRight:'none',borderLeft:'none'}}>HALLWAY</th>
          </tr>
        </thead>
        <tbody>
        <tr>
              <td className='table-time' style={{width:'20%'}}>5:00 PM</td>
              <td className='table-doors' style={{borderRight:'none',borderLeft:'none',fontWeight:'900'}}><b>-DOORS-</b></td>
              <td className='table-band' style={{borderRight:'none',borderLeft:'none'}}></td>
            </tr>
            {data.map(set => {
            let alignText = 'left'
            if(set[1].length){
              alignText = 'left'
              console.log(set)
            }
            if(set[2].length) {
              alignText = 'right'
            }
            return <tr>
              <td className='table-time' style={{width:'20%'}}>{set[0]}</td>
              <td className='table-band' style={{borderRight:'none',borderLeft:'none', padding:'0 0.5rem'}} colSpan={2}><div style={{textAlign:alignText}}>{set[2].length ? set[2] : set[1]}</div></td>
              {/* <td className='table-band' style={{borderRight:'none',borderLeft:'none'}}>{set[2]}</td> */}
            </tr>
          })}
        </tbody>
        <tfoot>
          <tr style={{backgroundColor:'rgb(153,0,0)',color:'white'}}>
            <td className='table-time' style={{borderRight:'none',borderLeft:'none'}}>{footer[0]}</td>
            <td style={{borderRight:'none',borderLeft:'none'}} colSpan={2}> {footer[1]}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    </>
  )
}

function Saturday() {

  const data = [
    // ['5:00 PM', '-DOORS-',''],
    ['2:30 PM', '', 'DUSILMENNI'],
    ['3:00 PM', 'ÁSLAUG DUNGAL', ''],
    ['3:30 PM', '', ''],
    ['4:00 PM', 'SORDIDE', ''],
    ['4:30 PM', '', 'GUBBA HORI'],
    ['5:00 PM', 'MONDERNTE', ''],
    ['5:30 PM', '', 'THE BOOB SWEAT GANG'],
    ['6:00 PM', 'VIRGIN ORCHESTRA', ''],
    ['6:30 PM', '', 'MARTIAN MOTORS'],
    ['7:00 PM', '', ''],
    ['7:30 PM', '', ''],
    ['8:00 PM', 'FLESH MACHINE', ''],
    ['8:30 PM', '', 'ROHT'],
    ['9:00 PM', 'MSEA', ''],
    ['9:30 PM', '', 'AERIAL RUIN'],
    ['10:00 PM', 'DYS', ''],
    ['10:30 PM', '', ''],
    ['11:00 PM', 'GODCHILLA', ''],
    ['11:40 PM', '', 'XOZVØNX'],
    ['12:10 AM', 'FLUISTERAARS', ''],
    ['12:40 AM', '', 'GÓÐXÆRI'],
    ['1:00 AM', '', ''],
    ['1:20 AM', 'GHOSTIGITAL', ''],
    ['2:00 AM', '', ''],
  ]
  const footer = ['2:?? AM', 'FIRE: KVLTGÖRN']
  return (
    <>
    <div style={{maxWidth:'600px',margin:'auto'}}>
    {/* <h1 style={{color:'white',textAlign:'center',paddingBottom:0,marginBottom:0,fontSize:'2.5rem'}}>NORÐANPAUNK 2023</h1> */}
 <table className="saturday-table" style={{backgroundColor:'rgb(217, 210, 233)'}}>
        <thead style={{border:'none',backgroundColor:'rgb(142, 124, 195)'}}>
          <tr>
            <th style={{border:'none',textAlign:'center',fontSize:'1.5rem'}} colSpan={3}>SATURDAY</th>
          </tr>
          <tr style={{backgroundColor:'white'}}>
            <th style={{borderRight:'none',borderLeft:'none',position:'relative'}}>      <img style={{position:'absolute',top:0,left:0,transform:'translate(-0%,-50%)'}} src={graphic1} alt="" />
</th>
            <th style={{borderRight:'none',borderLeft:'none'}}>STAGE</th>
            <th style={{borderRight:'none',borderLeft:'none'}}>HALLWAY</th>
          </tr>
        </thead>
        <tbody>
        {/* <tr>
              <td className='table-time' style={{width:'20%'}}>5:00 PM</td>
              <td className='table-band' style={{borderRight:'none',borderLeft:'none',fontWeight:'900'}}><b>-DOORS-</b></td>
              <td className='table-band' style={{borderRight:'none',borderLeft:'none'}}></td>
            </tr> */}
          {data.map(set => {
            let alignText = 'left'
            if(set[1].length){
              alignText = 'left'
              console.log(set)
            }
            if(set[2].length) {
              alignText = 'right'
            }
            return <tr>
              <td className='table-time' style={{width:'20%'}}>{set[0]}</td>
              <td className='table-band' style={{borderRight:'none',borderLeft:'none', padding:'0 0.5rem'}} colSpan={2}><div style={{textAlign:alignText}}>{set[2].length ? set[2] : set[1]}</div></td>
              {/* <td className='table-band' style={{borderRight:'none',borderLeft:'none'}}>{set[2]}</td> */}
            </tr>
          })}
        </tbody>
        <tfoot>
          <tr style={{backgroundColor:'rgb(153,0,0)',color:'white'}}>
            <td className='table-time' style={{borderRight:'none',borderLeft:'none'}}>{footer[0]}</td>
            <td style={{borderRight:'none',borderLeft:'none'}} colSpan={2}> {footer[1]}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    </>
  )
}

function Sunday() {

  const data = [
    // ['5:00 PM', '-DOORS-',''],
    ['3:00 PM', 'RAYIN', ''],
    ['3:30 PM', '', 'CHILLERA'],
    ['4:00 PM', 'ULTRA MAGNUS', ''],
    ['4:30 PM', '', 'EILÍF SJÁLFSFRÓUN'],
    ['5:00 PM', 'PTHUMULHU', ''],
    ['5:30 PM', '', 'FLAARYR'],
    ['6:00 PM', 'SVARTÞOKA', ''],
    ['6:30 PM', '', 'MÓR'],
    ['7:00 PM', '', ''],
    ['7:30 PM', '', ''],
    ['8:00 PM', 'ÓREIÐA', ''],
    ['8:30 PM', '', 'DREYMANDI HUNDUR'],
    ['9:00 PM', 'SKOFFÍN', ''],
    ['9:30 PM', '', 'DAUÐYFLIN'],
    ['10:00 PM', 'ÖRMAGNA', ''],
    ['10:30 PM', '', ''],
    ['11:00 PM', 'KÆLAN MIKLA', ''],
    ['11:40 PM', '', 'MC MYASNOI'],
    ['12:10 AM', 'GRAVESLIME', ''],
    ['12:50 PM', '', ''],
    ['1:20 PM', '', 'D7Y'],
    ['2:00 PM', 'DJ FLUGVÉL OG GEIMSKIP', ''],
  ]
  const footer = ['2:?? AM', 'FIRE']
  return (
    <>
    <div style={{maxWidth:'600px',margin:'auto'}}>
    {/* <h1 style={{color:'white',textAlign:'center',paddingBottom:0,marginBottom:0,fontSize:'2.5rem'}}>NORÐANPAUNK 2023</h1> */}
 <table className="saturday-table" style={{backgroundColor:'rgb(182, 215, 168)'}}>
        <thead style={{border:'none',backgroundColor:'rgb(106, 168, 79)'}}>
          <tr>
            <th style={{border:'none',textAlign:'center',fontSize:'1.5rem'}} colSpan={3}>SUNDAY</th>
          </tr>
          <tr style={{backgroundColor:'white'}}>
            <th style={{borderRight:'none',borderLeft:'none',position:'relative'}}>      <img style={{position:'absolute',top:0,left:0,transform:'translate(-0%,-50%)'}} src={graphic1} alt="" />
</th>
            <th style={{borderRight:'none',borderLeft:'none'}}>STAGE</th>
            <th style={{borderRight:'none',borderLeft:'none'}}>HALLWAY</th>
          </tr>
        </thead>
        <tbody>
        <tr>
              <td className='table-time' style={{width:'20%'}}>5:00 PM</td>
              <td className='table-doors' style={{borderRight:'none',borderLeft:'none',fontWeight:'900'}}>-DOORS-</td>
              <td className='table-band' style={{borderRight:'none',borderLeft:'none'}}></td>
            </tr>
          {data.map(set => {
            let alignText = 'left'
            if(set[1].length){
              alignText = 'left'
              console.log(set)
            }
            if(set[2].length) {
              alignText = 'right'
            }
            return <tr>
              <td className='table-time' style={{width:'20%'}}>{set[0]}</td>
              <td className='table-band' style={{borderRight:'none',borderLeft:'none', padding:'0 0.5rem'}} colSpan={2}><div style={{textAlign:alignText}}>{set[2].length ? set[2] : set[1]}</div></td>
              {/* <td className='table-band' style={{borderRight:'none',borderLeft:'none'}}>{set[2]}</td> */}
            </tr>
          })}
        </tbody>
        <tfoot>
          <tr style={{backgroundColor:'rgb(153,0,0)',color:'white'}}>
            <td className='table-time' style={{borderRight:'none',borderLeft:'none'}}>{footer[0]}</td>
            <td style={{borderRight:'none',borderLeft:'none'}} colSpan={2}> {footer[1]}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    </>
  )
}

function App() {

  
  return <>
  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',alignItems:'center',gap:0,margin:'auto',maxWidth:'600px',justifyContent:'space-around'}}>
      <img src={np_svg} alt="" />
      <img src={year_svg} alt="" />
    </div>
  <Friday/> 
  <Saturday/>
  <Sunday/>
  </>
}

export default App
