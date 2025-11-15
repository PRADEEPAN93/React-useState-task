
// import './App.css'
// import './Form.css'
import './Advice.css'
import { QrCode } from './Component/QrCode'
import { Counter } from './FormSample/Counter'
import { NormalUserDetails } from './FormSample/NormalUserDetails'
import RegForm from './FormSample/RegForm'
import { AdviceApp } from './AdviceAppApi/AdviceApp'


function App() {
 

  return (
    <>
      <QrCode />
      <Counter />
      <NormalUserDetails />
      <RegForm />
      <AdviceApp />
    </>
  )
}

export default App
