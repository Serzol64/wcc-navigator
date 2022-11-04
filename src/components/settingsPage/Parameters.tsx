import React from "react";


export class NavigatorSettings extends React.Component{
  render(): JSX.Element{
	  return (
		<React.Fragment>
			<section id="nav">
				<div className="advanced-list">
					<div>
						
					</div>
				</div>
			</section>
        </React.Fragment>
	  );
  }
}

export class SearchSettings extends React.Component{
    render(): JSX.Element{
       return (
        <React.Fragment>
			<section id="search">
				<div className="advanced-list">
					<div>
						
					</div>
				</div>
			</section>
        </React.Fragment>
       );
    }
}

export class PushSettings extends React.Component{
    render(): JSX.Element{
       return (
        <React.Fragment>
			<section id="push">
				<ul className="basic-list">
					<li>
						
					</li>
				</ul>
			</section>
        </React.Fragment>
       );
    }
}

export class SecuritySettings extends React.Component{
    render(): JSX.Element{
       return (
        <React.Fragment>
			<section id="security">
				<ul className="basic-list">
					<li>
						
					</li>
				</ul>
			</section>
        </React.Fragment>
       );
    }
}
