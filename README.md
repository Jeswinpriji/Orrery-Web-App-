# Orrery-Web-App-
Create an interactive, dynamic orrery web app that educates the public about planets, Near-Earth objects, and Potentially Hazardous Asteroids, using real-time NASA data and 3D graphics for an immersive experience


---

# Interactive Orrery Web App for Celestial Bodies 🌍☄️

## Overview

This web app is an interactive **orrery** that displays celestial bodies such as **planets** and other **solar system objects**. The project is part of the **NASA Space Apps Challenge**, aimed at educating the public about the solar system and demonstrating the use of **Keplerian parameters** for dynamic celestial modeling.

Users can explore the solar system in a visually appealing and interactive way, with tools to visualize the orbital paths and positions of celestial bodies in real time. The orrery can also be customized with multiple view options, including flying through space and adjusting the orbital display.

## Features

- 🌍 **Dynamic 3D Orrery**: Displays the planets and other celestial bodies.
- 🚀 **First-Person Flight Mode**: Explore the solar system from the perspective of flying among celestial bodies.
- 🌌 **Orbital Trajectories**: Colored paths indicating the orbits of various bodies.
- ⏱️ **Time Control**: Play, pause, and speed up time to observe orbital changes.
- 🔍 **Zoom & Pan**: Adjustable controls for zooming in and out of the solar system.
- 🔧 **Custom Data Upload**: Upload your own orbital datasets.
- 📅 **Timeline Visualization**: Shows the positions of bodies at different points in time.
- 🌠 **Interactive Filtering**: Limit the display to specific types of celestial bodies.

## How It Works

The app utilizes **Keplerian parameters** and **NASA’s Small Body Database** to accurately calculate the orbits of celestial bodies. Orbital propagation is handled dynamically, allowing for real-time updates as users interact with the timeline controls.

We implemented a range of features to make the experience intuitive and fun for users:
- **Label and Orbit Visibility Controls**: Users can toggle labels and orbits on or off.
- **Speed Adjuster**: Control how fast time progresses within the simulation.
- **Custom Constraints**: Filter objects by type, orbit class, or specific constraints.

## Technologies Used

- **WebGL / Three.js**: For rendering the 3D graphics.
- **NASA Open Data**: For retrieving celestial data such as Keplerian elements.
- **JavaScript, HTML, CSS**: For building the web app.
- **Orbital Propagator**: To compute the positions of celestial bodies over time.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/interactive-orrery.git
   cd interactive-orrery
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app locally:
   ```bash
   npm start
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```


## Contributing

We welcome contributions! Feel free to submit a pull request or open an issue if you have ideas or encounter problems.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-new-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-new-feature
   ```
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

