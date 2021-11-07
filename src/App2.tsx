import * as JSOG from 'jsog';
import * as React from 'react';
import * as _ from 'underscore';
import DEMO_DATA from './demo-data';
import { Bracket, BracketGame } from 'react-tournament-bracket';

const GAMES = JSOG.decode(DEMO_DATA);
// const ROOT: any = _.findWhere(GAMES, { id: '35b0745d-ef13-4255-8c40-c9daa95e4cc4' });
const ROOT: any = _.findWhere(GAMES, { id: "20" });
const ROOT2: any = _.findWhere(GAMES, { id: "17" });

export default class App extends React.PureComponent {
  public state = {
    hoveredTeamId: null
  };


  public render() {
    const { gameComponent: GameComponent } = this;

    return (
      <div
  style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'}}>
              <h1>The Showdown Effect - Tournament 2</h1>
  <svg
  viewBox="-130 75 2100 945"
  preserveAspectRatio="true"
>
        <Bracket game={ROOT} homeOnTop={true} GameComponent={GameComponent}/>

        <svg
  viewBox="0 -500 2100 945"
>
        <Bracket game={ROOT2} homeOnTop={true} GameComponent={GameComponent}/>
        </svg>
        </svg>
      </div>
    );
  }

  private changeHoveredTeamId = (hoveredTeamId: string) => this.setState({ hoveredTeamId });

  private gameComponent = (props: any) => {
    return (
      <BracketGame
        {...props}
        onHoveredTeamIdChange={this.changeHoveredTeamId}
        hoveredTeamId={this.state.hoveredTeamId}/>
    );
  };
}