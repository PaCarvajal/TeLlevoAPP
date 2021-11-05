package io.ionic.starter;
import com.hemangkumar.capacitorgooglemaps.CapacitorGoogleMaps;
import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
 
public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      registerPlugin(CapacitorGoogleMaps.class);
    }
}