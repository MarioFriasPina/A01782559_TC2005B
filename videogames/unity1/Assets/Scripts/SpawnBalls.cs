using System.Collections;
using System.Collections.Generic;
using UnityEngine;


//Functions that spawns balls at the top of the screen
public class SpawnBalls : MonoBehaviour
{
    [SerializeField] float delay;
    [SerializeField] GameObject obj;
    [SerializeField] float limit;

    // Start is called before the first frame update
    void Start()
    {
        InvokeRepeating("CreateBall", delay, delay);
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void CreateBall()
    {
        Vector3 newPos = new Vector3(Random.Range(-limit, limit), 6, 0);
        Instantiate(obj, newPos, Quaternion.identity);
    }
}
