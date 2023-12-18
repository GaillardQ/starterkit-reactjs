// Misc libs
import { FC } from 'react'
// @ui
import UiElement from '@ui/layout/Element/UiElement'

const App: FC = () => {

  return (
    <UiElement>
		<h1>Hello</h1>
		<p>You are on the first page of my ReactJS starterkit.</p>
		<p>{"This one's under construction, but in the meantime, here's some reading material."}</p>

		<p style={{"fontSize": 9, "fontStyle": "italic", "textAlign": "justify", "borderLeft": "5px solid grey", "paddingLeft": "4px"}}>
			{"The flux capacitor. You don't understand. I'd like you to meet my good friend George McFly. Mr. McFly, Mr. McFly, this just arrived, oh hi Marty. I think it's your new book. Which one's your pop?"}
			<br />
			<br />
			{"Listen, this is very important, I forgot my video camera, could you stop by my place and pick it up on your way to the mall? Uh, yeah. Hey you, get your damn hands off, oh. he's an idiot, comes from upbringing, parents were probably idiots too. Lorraine, if you ever have a kid like that, I'll disown you. Oh."}"
			<br />
			<br />
			{"Oh, thank you, thank you. Okay now, we run some industrial strength electrical cable from the top of the clocktower down to spreading it over the street between two lamp posts. Meanwhile, we out-fitted the vehicle with this big pole and hook which runs directly into the flux-capacitor. At the calculated moment, you start off from down the street driving toward the cable execrating to eighty-eight miles per hour. According to the flyer, at !0:04 pm lightning will strike the clocktower sending one point twenty-one gigawatts into the flux-capacitor, sending you back to 1985. Alright now, watch this. You wind up the car and release it, I'll simulate the lightening. Ready, set, release. Huhh. You know Marty, I'm gonna be very sad to see you go. You've really mad a difference in my life, you've given me something to shoot for. Just knowing, that I'm gonna be around to se 1985, that I'm gonna succeed in this. That I'm gonna have a chance to travel through time. It's going to be really hard waiting 30 years before I could talk to you about everything that's happened in the past few days. I'm really gonna miss you, Marty. Wow, ah Red, you look great. Everything looks great. 1:24, I still got time. Oh my god. No, no not again, c'mon, c'mon. Hey. Libyans. No, Doc. This is it. This is the answer. It says here that a bolt of lightning is gonna strike the clock tower precisely at 10:04 p.m. next Saturday night. If we could somehow harness this bolt of lightning, channel it into the flux capacitor, it just might work. Next Saturday night, we're sending you back to the future."}
		</p>
	</UiElement>
  )
}

export default App
