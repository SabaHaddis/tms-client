"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polyfill_1 = require("@js-temporal/polyfill");
// import type { Student } from "./models/student.model.ts";
const student = {
    id: "STU-001",
    name: "Hana Tadesse",
    enrollmentDate: polyfill_1.Temporal.Now.instant(),
};
const student_model_js_1 = require("./models/student.model.js");
function processStudent(raw) {
    if ((0, student_model_js_1.isStudent)(raw)) {
        const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not yet graded";
        console.log(`Student ${raw.name} GPA: ${gpaDisplay}`);
    }
    else {
        console.error("Invalid student data received");
    }
}
processStudent({
    id: "STU-001",
    name: "Hana",
    gpa: 3.7
});
processStudent(42);
const student_model_1 = require("./models/student.model");
console.log((0, student_model_1.parseStudent)({ id: "STU-001", name: "Hana" }));
// Prints a valid Student object
(0, student_model_1.parseStudent)({ id: 42, name: "Test" });
// Throws: TypeError: Expected id to be a string, received number
