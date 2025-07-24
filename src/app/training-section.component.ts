import { Component } from '@angular/core';

@Component({
  selector: 'app-training-section',
  template: `
    <section class="training-section">
      <div class="container">
        <div class="training-content">
          <div class="training-text">
            <h2>Be in Demand with Our Professional Training</h2>
            <div class="training-points">
              <div class="training-point">
                <p>Click edit button to change this text. Lorem ipsum dolor sit amet, 
                   consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, 
                   pulvinar dapibus leo.</p>
              </div>
              <div class="training-point">
                <p>Click edit button to change this text. Lorem ipsum dolor sit amet, 
                   consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, 
                   pulvinar dapibus leo.</p>
              </div>
              <div class="training-point">
                <p>Click edit button to change this text. Lorem ipsum dolor sit amet, 
                   consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, 
                   pulvinar dapibus leo.</p>
              </div>
            </div>
          </div>
          <div class="training-image">
            <img src="assets/images/manager.png" alt="Professional Training">
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./training-section.component.css']
})
export class TrainingSectionComponent { } 