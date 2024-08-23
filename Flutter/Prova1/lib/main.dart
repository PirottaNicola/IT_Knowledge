import 'package:flutter/material.dart';
import 'package:flutter/animation.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Who is Rich?',
      theme: ThemeData(
        primarySwatch: Colors.grey,
        scaffoldBackgroundColor: Colors.blueGrey[900],
      ),
      home: MyHomePage(title: 'Home page'),
    );
  }
}

class MyHomePage extends StatelessWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
            child: Container(
          child: Text(
            'I am RICH',
            style: TextStyle(
              color: Colors.amberAccent[400],
              fontWeight: FontWeight.w300,
              fontSize: 50,
            ),
            textAlign: TextAlign.left,
          ),
          width: 250,
          height: 70,
          decoration: myBoxDecoration(),
        )),
        floatingActionButton: Text(
          "Official Certificate - signed by: The World",
          style: TextStyle(
              color: Colors.white, fontWeight: FontWeight.w100, fontSize: 15),
        ));
  }

  BoxDecoration myBoxDecoration() {
    return BoxDecoration(
        border: Border.all(width: 1, color: Colors.grey[600]),
        borderRadius: BorderRadius.circular(20),
        color: Colors.blueGrey[800]);
  }
}
