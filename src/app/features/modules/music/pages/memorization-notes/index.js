import { Chords } from './chord.dic'
import './styles.css'

const MemorizationNotes = () => {
  return (
    <div className="container--cards">
      <div className="mb-6">
        <h1 className="text-2xl">Acordes</h1>
      </div>
      <div className="flex flex-wrap">
        {Chords.map((chord) => (
          <div class="card--box">
            <div class="card">
              <div class="card--title">
                <h1 className="text-2xl">{chord.chord}</h1>
              </div>
              <div class="chord">
                <h2 className="note">{chord.note1}</h2>
                <h2 className="note">{chord.note2}</h2>
                <h2 className="note">{chord.note3}</h2>
                {chord.note4 !== '' && <h2 className="note">{chord.note4}</h2>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default MemorizationNotes
