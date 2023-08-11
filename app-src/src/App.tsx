import './style.css'
import np_svg from './assets/np_svg.svg'
import year_svg from './assets/year_svg.svg'
import graphic1 from './assets/graphic1.svg'
import eldur from './assets/eldur.png'
import gitar from './assets/gitar.svg'
import trommur from './assets/trommur.svg'

function FridayExtraRow() {
	return (
		<tr>
			<td className='table-time' style={{ width: '20%' }}>
				5:00 PM
			</td>
			<td
				className='table-doors'
				style={{
					borderRight: 'none',
					borderLeft: 'none',
					fontWeight: '900',
				}}
			>
				<b>-DOORS-</b>
			</td>
			<td
				className='table-band'
				style={{ borderRight: 'none', borderLeft: 'none' }}
			></td>
		</tr>
	)
}

function DayScheduleTable({
	sets,
	footerSet,
	customRows,
	headerColor,
	mainColor,
	headerImage,
	footerImage,
	day,
}: {
	sets: string[][]
	footerSet: string[]
	customRows?: any
	headerColor: string
	mainColor: string
	headerImage: string
	footerImage: string
	day: string
}) {
	return (
		<div style={{ maxWidth: '600px', margin: 'auto' }}>
			{/* <h1 style={{color:'white',textAlign:'center',paddingBottom:0,marginBottom:0,fontSize:'2.5rem'}}>NORÐANPAUNK 2023</h1> */}
			<table style={{ backgroundColor: mainColor }}>
				<thead style={{ border: 'none', backgroundColor: headerColor }}>
					<tr>
						<th
							style={{
								border: 'none',
								textAlign: 'center',
								fontSize: '1.5rem',
							}}
							colSpan={3}
						>
							{day}
						</th>
					</tr>
					<tr style={{ backgroundColor: 'white' }}>
						<th
							style={{
								borderRight: 'none',
								borderLeft: 'none',
								position: 'relative',
							}}
						>
							{' '}
							<img
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									transform: 'translate(-0%,-50%)',
								}}
								src={headerImage}
								alt=''
							/>
						</th>
						<th style={{ borderRight: 'none', borderLeft: 'none' }}>STAGE</th>
						<th style={{ borderRight: 'none', borderLeft: 'none' }}>HALLWAY</th>
					</tr>
				</thead>
				<tbody>
					{customRows}

					{sets.map((set) => {
						let alignText = 'left'
						if (set[1].length) {
							alignText = 'left'
							console.log(set)
						}
						if (set[2].length) {
							alignText = 'right'
						}
						return (
							<tr>
								<td className='table-time' style={{ width: '20%' }}>
									{set[0]}
								</td>
								<td
									className='table-band'
									style={{
										borderRight: 'none',
										borderLeft: 'none',
										padding: '0 0.5rem',
									}}
									colSpan={2}
								>
									{set.length == 4 ? <a href={set[3]}> {/*have a youtube video*/}
										<div style={{ textAlign: alignText }}>
											{set[2].length ? set[2] : set[1]}
										</div>
									</a> : <div style={{ textAlign: alignText,color:'gray' }}>
											{set[2].length ? set[2] : set[1]}
										</div>}
								</td>
								{/* <td className='table-band' style={{borderRight:'none',borderLeft:'none'}}>{set[2]}</td> */}
							</tr>

						)
					})}
				</tbody>
				<tfoot>
					<tr style={{ backgroundColor: 'rgb(153,0,0)', color: 'white' }}>
						<td
							className='table-time'
							style={{ borderRight: 'none', borderLeft: 'none' }}
						>
							{footerSet[0]}
						</td>
						<td
							style={{
								borderRight: 'none',
								borderLeft: 'none',
								textAlign: 'center',
							}}
						>
							{' '}
							{footerSet[1]}
						</td>
						<td
							style={{
								position: 'relative',
								borderRight: 'none',
								borderLeft: 'none',
								width: '20%',
							}}
						>
							<img
								style={{
									position: 'absolute',
									bottom: '-1rem',
									right: '-1rem',
									maxWidth: '70%',
								}}
								src={footerImage}
								alt=''
							/>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	)
}

function App() {
	const fridayData = [
		// ['5:00 PM', '-DOORS-',''],
		['5:30 PM', '', ''],
		['6:00 PM', 'OSMÉ', ''],
		['6:30 PM', '', 'SMEGMAGEDDON'],
		['7:00 PM', 'LÍKAMI', ''],
		['7:30 PM', '', ''],
		['8:00 PM', 'DÖDSRIT', ''],
		['8:30 PM', '', 'TONTO','https://www.youtube.com/watch?v=MRse5xU6BRs'],
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
	const fridayFooter = ['2:?? AM', 'FIRE: SANGRE DE MUERDAGO']

	const saturdayData = [
		// ['5:00 PM', '-DOORS-',''],
		['2:30 PM', '', 'DUSILMENNI'],
		['3:00 PM', 'ÁSLAUG DUNGAL', ''],
		['3:30 PM', '', ''],
		['4:00 PM', 'SORDIDE', ''],
		['4:30 PM', '', 'GUBBA HORI'],
		['5:00 PM', 'MONDERNTE', ''],
		['5:30 PM', '', 'THE BOOB SWEAT GANG'],
		['6:00 PM', 'VIRGIN ORCHESTRA', ''],
		['6:30 PM', '', 'MARTIAN MOTORS','https://www.youtube.com/watch?v=f2FEaXnnRPc'],
		['7:00 PM', '', ''],
		['7:30 PM', '', ''],
		['8:00 PM', 'FLESH MACHINE', ''],
		['8:30 PM', '', 'ROHT','https://www.youtube.com/watch?v=xkB87AwgEpE'],
		['9:00 PM', 'MSEA', ''],
		['9:30 PM', '', 'AERIAL RUIN'],
		['10:00 PM', 'DYS', ''],
		['10:30 PM', '', ''],
		['11:00 PM', 'GODCHILLA', ''],
		['11:40 PM', '', 'XOZVØNX'],
		['12:10 AM', 'FLUISTERAARS', ''],
		['12:40 AM', '', 'GÓÐXÆRI','https://www.youtube.com/watch?v=lAGR47ph1v4'],
		['1:00 AM', '', ''],
		['1:20 AM', 'GHOSTIGITAL', ''],
		['2:00 AM', '', ''],
	]
	const saturdayFooter = ['2:?? AM', 'FIRE: KVLTGÖRN']

	const sundayData = [
		// ['5:00 PM', '-DOORS-',''],
		['3:00 PM', 'RAYIN', ''],
		['3:30 PM', '', 'CHILLERA','https://www.youtube.com/watch?v=dWc68oSYWNY'],
		['4:00 PM', 'ULTRA MAGNUS', ''],
		['4:30 PM', '', 'EILÍF SJÁLFSFRÓUN'],
		['5:00 PM', 'PTHUMULHU', ''],
		['5:30 PM', '', 'FLAARYR'],
		['6:00 PM', 'SVARTÞOKA', ''],
		['6:30 PM', '', 'MÓR'],
		['7:00 PM', '', ''],
		['7:30 PM', '', ''],
		['8:00 PM', 'ÓREIÐA', ''],
		['8:30 PM', '', 'DREYMANDI HUNDUR','https://www.youtube.com/watch?v=K6wjPR8Vdl0'],
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
	const sundayFooter = ['2:?? AM', 'FIRE']

	return (
		<>
			<div
				style={{
					gap: 0,
					margin: 'auto',
					boxSizing: 'border-box',
					padding: '0 3rem',
					// width: 'min(100vw,600px)',
          maxWidth:'100vw'
					// justifyContent: 'center',
				}}
			>
				<div
					style={{
						// display: 'grid',
						// gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
						// alignItems: 'center',
            // justifyContent:'center',
            // margin:'auto'
					}}
				>
					<img src={np_svg} alt='' style={{margin:'auto'}} />
					<img src={year_svg} alt='' style={{margin:'auto'}} />
				</div>
			</div>
			<DayScheduleTable
				sets={fridayData}
				footerSet={fridayFooter}
				headerImage={graphic1}
				mainColor={'rgb(234, 153, 153)'}
				headerColor={'rgb(187,38,26)'}
				footerImage={gitar}
				day='FRIDAY'
				customRows={<FridayExtraRow />}
			/>
			<DayScheduleTable
				sets={saturdayData}
				footerSet={saturdayFooter}
				headerImage={graphic1}
				mainColor={'rgb(217, 210, 233)'}
				headerColor={'rgb(142, 124, 195)'}
				footerImage={eldur}
				day='SATURDAY'
			/>
			<DayScheduleTable
				sets={sundayData}
				footerSet={sundayFooter}
				headerImage={graphic1}
				mainColor={'rgb(182, 215, 168)'}
				headerColor={'rgb(106, 168, 79)'}
				footerImage={trommur}
				day='SUNDAY'
			/>
			{/* <Friday />
			<Saturday />
			<Sunday /> */}
		</>
	)
}

export default App
