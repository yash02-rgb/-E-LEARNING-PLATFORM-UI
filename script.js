const courses = [
    {
        name: "HTML Basics",
        video: "https://www.youtube.com/embed/qz0aGYrrlhU"
    },
    {
        name: "CSS Introduction",
        video: "https://www.youtube.com/embed/1Rs2ND1ryYc"
    },
    {
        name: "JavaScript for Beginners",
        video: "https://www.youtube.com/embed/hdI2bqOjy3c"
    }
];

const courseList = document.getElementById("course-list");
const videoFrame = document.getElementById("video-frame");

courses.forEach((course, index) => {
    let li = document.createElement("li");
    li.textContent = course.name;
    li.onclick = () => {
        videoFrame.src = course.video;
        updateProgress((index + 1) * 30); // Example progress logic
    };
    courseList.appendChild(li);
});

function updateProgress(value) {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
    progressBar.value = value;
    progressText.textContent = value + "% Completed";
}
