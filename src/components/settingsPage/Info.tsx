import React from "react";
import { Route, NavLink as Link } from "react-router-dom";

export class AppInfo extends React.Component<{ service: string }, {}>{
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: { service: string }){
    super(props);
  }
  render(): JSX.Element | undefined{
	  switch(this.props.service){
        case 'about': return <About />; break;
        case 'security': return <WCCSecurity />; break;
        case 'list': return <WCCServices />; break;
      }
  }
}

class About extends React.Component{
  render(): JSX.Element{
	  return (
		<React.Fragment>
			<section className="aboutPage">
				<header id="about"><img src="https://img.icons8.com/fluency/48/null/map-marker.png"/></header>
				<main id="about">
						<h2>Навигатор Совёнка</h2>
						<h4>Версия: Стартовая</h4>
						<address>&copy; {'2023'} WCC Team</address>
				</main>
			</section>
        </React.Fragment>
	  );
  }
}
class WCCSecurity extends React.Component{
    render(): JSX.Element{
        return (
          <React.Fragment>
			<pre>
			</pre>
          </React.Fragment>
        );
    }
}
class WCCServices extends React.Component{
    render(): JSX.Element{
        return (
            <React.Fragment>
				<section className="appsPage">
				  <div className="description">
									<h2>Совёнок - мой лучший друг</h2>
									<span>Это приложение, которым вы пользуетесь, является частью социальнозначимой экосистемы "Совёнок - мой лучший друг" </span>
								</div>
								<ul>
									<li>
										<img src="https://i.pinimg.com/736x/7f/17/4d/7f174d82a955936d3949374624762ccb.jpg" />
										<div>
											<h4>PECS App</h4>
											<p>Приложения для социализации, абилитации и адаптации по эффективным методикам PECS</p>
										</div>
							<span>Загрузить прямо сейчас!</span>
									</li>
								</ul>
				</section>
            </React.Fragment>
        );
    }
}
