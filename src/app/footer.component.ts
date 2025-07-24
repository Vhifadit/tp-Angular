import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>LearnDash Academy</h3>
            <p>Votre plateforme d'apprentissage en ligne</p>
          </div>
          <div class="footer-section">
            <h4>Liens rapides</h4>
            <ul>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#courses">Cours</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Contact</h4>
            <p>Email: info@learndash-academy.com</p>
            <p>Téléphone: +1 234 567 890</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} LearnDash Academy. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
} 