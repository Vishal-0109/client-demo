import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('client-demo');
  deferredPrompt: any;

  ngOnInit() {
    window.addEventListener('beforeinstallprompt', (event: Event) => {
      event.preventDefault(); // stop default mini-infobar
      this.deferredPrompt = event;

      // 👇 auto-trigger the install prompt
      setTimeout(() => {
        this.deferredPrompt.prompt();
        this.deferredPrompt.userChoice.then((choiceResult: any) => {
          console.log('User choice:', choiceResult.outcome);
          this.deferredPrompt = null;
        });
      }, 1000); // wait 1s after event
    });
  }
}
