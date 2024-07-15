1. Problem definition:

What is the problem?
A user constantly performs manual conversions, always needing references to length (meters/feet), volume (liters/gallons), mass (kilograms/pounds).

The user always enters the value in three units: Xmeters, Xliters, Xkilos
x the same value

The expected response is:


Xmeters in feet = value
Xfeet in meters = value

Xliters to gallons = value
Xgallons in liters = value

Xkilos in pounds = value
Xpounds in kilos = value

Goals:
to. obtain all calculations automatically.

2. Information collection
What information do I need to resolve the problem?
How does JavaScript do unit conversions?

How is the manual conversion done?

1 meter = 3,281 feet
1 liter = 0.264 gallon
1 kilogram = 2,204 pounds

twenty
20 meters in feet = value --->20*3.281
20feet in meters = value ---> 20feet*1/3.281

Xliters to gallons = value
Xgallons in liters = value

Xkilos in pounds = value
Xpounds in kilos = value

3. What information is relevant to achieve the objectives.

Unit changes do not have javascript methods, therefore each operation must be implemented

4. What ideas could solve the problem?

Interface that allows the user to enter a numerical value and, by pressing a button, obtain the six expected values ​​and can additionally copy the values ​​referring to the desired mass, volume, or length using another button.

5. What idea will be developed and why?

6. What technologies will be used to develop the problem?

HTML for Wen page structure

CSS to style the structure.

JAVASCRIPT to generate interactivity between buttons and paragraph fields