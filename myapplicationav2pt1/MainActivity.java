package com.example.myapplicationav2pt1;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.view.View;
import android.widget.EditText;
import android.os.Bundle;
import android.widget.RadioButton;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    EditText edCity, edEst, edPop, edRen, edData, edIdioma, edDdd, edIDH, edTur;
    RadioButton rbOcidental, rbOriental;
    SharedPreferences prefs;
    Intent intent;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        edCity = findViewById(R.id.editTextText);
        edEst = findViewById(R.id.editTextText2);
        edPop = findViewById(R.id.editTextText3);
        edRen = findViewById(R.id.editTextText4);
        edData = findViewById(R.id.editTextText5);
        edIdioma = findViewById(R.id.editTextText6);
        edDdd = findViewById(R.id.editTextText7);
        edIDH = findViewById(R.id.editTextText9);
        edTur =  findViewById(R.id.editTextText10);
        rbOcidental = findViewById(R.id.radioButton);
        rbOriental = findViewById(R.id.radioButton3);
        prefs = getSharedPreferences("dadosCidade", MODE_PRIVATE);
        IniciarDadosCidade();
    }

    private void IniciarDadosCidade() {
        if(prefs.contains("nome"))
            edCity.setText(prefs.getString("nome", "Nome:?"));
        if(prefs.contains("estado"))
            edEst.setText(prefs.getString("estado","Estado:?"));
        if(prefs.contains("população"))
            edPop.setText(String.valueOf(prefs.getFloat("população", 0.0f)));
        if(prefs.contains("rendapercapta"))
            edRen.setText(String.valueOf(prefs.getFloat("rendapercapta", 0.0f)));
        if(prefs.contains("idade"))
            edData.setText(String.valueOf(prefs.getInt("idade", 0)));
        if(prefs.contains("idioma"))
            edIdioma.setText(prefs.getString("idioma", "Idioma:?"));
        if(prefs.contains("DDD"))
            edDdd.setText(String.valueOf(prefs.getInt("DDD", 0)));
        if(prefs.contains("IDH"))
            edIDH.setText(String.valueOf(prefs.getFloat("IDH", 0.0f)));
        if(prefs.contains("PontoTuristico"))
            edTur.setText(prefs.getString("PontoTuristico", "Ponto Turistico:?"));
        if(prefs.contains("Ocidental")) {
            if (prefs.getBoolean("Ocidental", true)) {
                rbOcidental.setChecked(true);
            }else{
                rbOriental.setChecked(true);
            }
        }else{
            rbOcidental.setChecked(true);
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        save();
    }

    public void save(){
        SharedPreferences.Editor prefCidade = prefs.edit();
        prefCidade.putString("nome", edCity.getText().toString());
        prefCidade.putString("estado", edEst.getText().toString());
        prefCidade.putFloat("população", Float.parseFloat(edPop.getText().toString()));
        prefCidade.putFloat("rendapercapta", Float.parseFloat(edRen.getText().toString()));
        prefCidade.putInt("idade",Integer.parseInt(edData.getText().toString()));
        prefCidade.putString("idioma",edIdioma.getText().toString());
        prefCidade.putInt("DDD", Integer.parseInt(edDdd.getText().toString()));
        prefCidade.putFloat("IDH", Float.parseFloat(edIDH.getText().toString()));
        prefCidade.putString("PontoTuristico",edTur.getText().toString());
        if(rbOcidental.isChecked())
            prefCidade.putBoolean("Ocidental", true);
        else
            prefCidade.putBoolean("Ocidental", false);

        prefCidade.commit();
        Toast.makeText(getApplicationContext(),
                "PREFERENCIAS SALVAS COM SUCESSO", Toast.LENGTH_LONG).show();
    }

    public void Envia(View v){
        String city = edCity.getText().toString();
        String estado = edEst.getText().toString();
        float populacao = Float.parseFloat(edPop.getText().toString());
        float idh = Float.parseFloat(edIDH.getText().toString());
        intent = new Intent(getApplicationContext(), TelaConfirmacao.class);
        intent.putExtra("valor1", city);
        intent.putExtra("valor2", estado);
        intent.putExtra("float1", String.valueOf(populacao));
        intent.putExtra("float2", String.valueOf(idh));
        startActivity(intent);
    }
}
