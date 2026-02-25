import { Component, computed, effect, signal } from '@angular/core';
import { Login } from './login/login';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Login,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tutorial-v21');
  public count = 0;
  public name = '';
  public username = signal('');
  public surname = '';
  public isReadonly = false;
  public normalProperty = 0;
  public signalData = signal(0);

  // public height = 10;
  // public width = 10;
  // public area = this.height * this.width;
  public height = signal(10);
  public width = signal(10);
  public area = computed(() => this.height() * this.width());

  public speed = signal(0);
  public speedColor = 'green';

  constructor() {
    effect(() => {
      if (this.signalData() === 11) {
        this.signalData.set(0);
        console.log('signal');
      }

      if (this.speed() >= 90) {
        console.log('spedd');
        this.speedColor = 'red';
      } else if (this.speed() < 90) {
        this.speedColor = 'green';
      }
    });
  }

  increase(sym: string) {
    if (sym == '+') {
      this.count = this.count + 1;
    } else {
      this.count = this.count - 1;
    }
  }

  public getInput(event: any) {
    this.name = event.target.value;
  }

  public changeProperty() {
    setTimeout(() => {
      this.normalProperty++;
      console.log('Updated:', this.normalProperty);
    }, 2000);
    // this.normalProperty++;
  }

  public changeSignalVal() {
    setTimeout(() => {
      this.signalData.set(this.signalData() + 1);
      console.log('Updated:', this.normalProperty);
    }, 2000);
    // this.signalData.set(this.signalData() + 1);
  }

  public handleArea() {
    this.height.set(this.height() + 1);
  }

  public handleSpeed(eff: string) {
    if (eff == '+') {
      this.speed.set(this.speed() + 10);
    } else {
      this.speed.set(this.speed() - 10);
    }
  }
}
