export const wording = {
    pageTitle: "Classification of Handwritten Numbers with Neural Networks",
    overallInfo: `The classification of objects into a predefined group or class is a frequently encountered 
    decision making task for human beings. Humans can classify objects based on the observed attributes 
    and characteristics of the objects, thus solving a classification problem. The task of classifying objects
    can be automated, and this page contain information about how three different neural networks classify
    handwritten numbers. The three networks are a feed forward neural network (FFNN), a FFNN with dropout, and 
    a bayesian neural network (BNN). On this webpage you are encouraged to make a guess of how the neural networks 
    calssify different images. Give it a try!`,
    question: "What number do you think the different networks have classified the number in the image to the left as?",
    moreInfoFFNN: `FFNNs are simple neural networks where the information only moves forward through 
    the network due to it having no cycles. However, even in its simplisity, it can approximate any function
    abitrarily close. Its performance when tasked with classifying handwritten numbers from the MNIST database 
    is visualized in the far left confusion matrix above. This confusion matrix shows that ....`,
    moreInfoDropout: `The FFNN with dropout is a more advanced version of the simple FFNN. A 
    dropout layer is added to the FFNN, thus making the network temporarily remove nodes and their 
    connection from the network, i.e., the network "drops nodes", with a given probability. Here, this 
    dropping of nodes is used to investigate whether introducing probabilistic dropping of nodes improves the 
    networks ability to show uncertainty. The FFNN with dropout is thus ment to be introduced as 
    an alternative to BNNs discussed later.\nIn the figure above, the performance of the FFNN with dropout
    is visualized in the confusion matrix in the middle. This confusion matrix shows that ....`,
    moreInfoBNN: `BNNs are neural network that can show uncertainty. They do so by utilizing probability distributions
    for their weights and biases instead of scalar values as FFNN does. The utilization of probability distributions
    result in a BNN being an ensemble of networks where each network has its weights and biases drawn from the 
    distribution. Thus, the response from each network in this ensambe can be compared to give an idea of how
    certain the BNN is of its results.\nThe confusion matrix to the far right in the figure above shows the 
    performance of the BNN on the MNIST test set. Comparing this confusion matrix to the other matrices ....`
}